<template>
  <section ref="component" class="o-component-contact-block">
    <div class="container">
      <div class="row">
        <h2>{{ component.fields.title }}</h2>
      </div>
      <div class="row">

        <form class="o-form _contact-form" v-if="!submitted" @submit.prevent="submitForm">
          <div class="m-control-wrap" :class="{ invalid: nameValidity === 'invalid' }">
            <input
              class="a-form-control"
              type="text"
              @blur="validateInput('name')"
              placeholder="My name is..."
              v-model.trim="name"
            />
            <p v-if="nameValidity === 'invalid'">Please enter a valid name</p>
          </div>
          <div class="m-control-wrap" :class="{ invalid: subjectValidity === 'invalid' }">
            <input
              type="text"
              class="a-form-control"
              placeholder="And I'd like to talk about..."
              v-model.trim="subject"
              @blur="validateInput('subject')"
            />
            <p v-if="subjectValidity === 'invalid'">Please enter a valid subject</p>
          </div>
          <div class="m-control-wrap" :class="{ invalid: emailValidity === 'invalid' }">
            <input
              placeholder="My email address is..."
              class="a-form-control"
              type="email"
              v-model.trim="email"
              @blur="validateInput('email')"
            />
            <p v-if="emailValidity === 'invalid'">Please enter a valid email</p>
          </div>
          <p class="error" v-if="invalidInput">One or more input fields are invalid. Please check your provided data.</p>
          <p class="error" v-if="error">{{ error }}</p>
          <div class="button-group">
            <button class="a-btn" type="submit">Send
              <span>
                <svg
                width="32"
                height="8"
                viewBox="0 0 32 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                  <path d="M31.3536 4.35355C31.5488 4.15829 31.5488 3.84171 31.3536 3.64645L28.1716 0.464466C27.9763 0.269204 27.6597 0.269204 27.4645 0.464466C27.2692 0.659728 27.2692 0.976311 27.4645 1.17157L30.2929 4L27.4645 6.82843C27.2692 7.02369 27.2692 7.34027 27.4645 7.53553C27.6597 7.7308 27.9763 7.7308 28.1716 7.53553L31.3536 4.35355ZM0 4.5H31V3.5H0V4.5Z" fill="white"/>
                </svg>
              </span>
            </button>
          </div>
        </form>
        <div v-else class="m-success">
          <h3>Thanks</h3>
          <p>Thanks for contacting us. We will be in touch soon.</p>
        </div>

      </div>
    </div>
  </section>
</template>

<script>

import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { INLINES } from "@contentful/rich-text-types";
import { BLOCKS } from "@contentful/rich-text-types";

export default {

  props: ['component'],

  data() {
    return {
      name: '',
      subject: '',
      email: '',
      nameValidity: 'pending',
      subjectValidity: 'pending',
      emailValidity: 'pending',
      invalidInput: false,
      error: null,
      submitted: false,
    };
  },

  computed: {
    content() {

      const url = component.fields.image.fields.file.url;
      const width = component.fields.image.fields.file.details.image.width;
      const height = component.fields.image.fields.file.details.image.height;

      const siteBaseURL = process.env.SITE_BASE_URL;

      const options = {
        renderNode: {
          [INLINES.HYPERLINK]: (node, next) => {
            return `<a href="${node.data.uri}"${
              node.data.uri.startsWith(siteBaseURL) ? "" : ' target="_blank"'
            }>${next(node.content)}</a>`;
          },
          [BLOCKS.PARAGRAPH]: (node, next) => {
            return `<p class="a-body-copy">${next(node.content)}</p>`;
          },
        },
      };
      const rawRichTextField = this.component.fields.content;
      return documentToHtmlString(rawRichTextField, options);
    }
  },

  methods: {
    validateInput(type) {
      if (type === 'name') {
        if (this.name === '') {
          this.nameValidity = 'invalid';
        } else {
          this.nameValidity = 'valid';
        }
      } else if (type === 'subject') {
        if (this.subject === '') {
          this.subjectValidity = 'invalid';
        } else {
          this.subjectValidity = 'valid';
        }
      } else if (type === 'email') {
        if (this.email === '') {
          this.emailValidity = 'invalid';
        } else {
          this.emailValidity = 'valid';
        }
      }
    },
    submitForm() {
      if (this.name === '' || !this.subject === '' || this.email === '') {
        this.invalidInput = true;
        return;
      }
      this.invalidInput = false;
      this.error = null;
      fetch('/data/submissions.json', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          name: this.name,
          subject: this.subject,
          email: this.email,
        }),
      }).then(response => {
        if (response.ok) {
          this.submitted = true;
        } else {
          throw new Error('Could not save data!');
        }
      }).catch(error => {
        this.error = error.message;
      });

      this.name = '';
      this.subject = '';
      this.email = '';
    },
  }

}

</script>

<style lang="scss" scoped>

// BLOCK STYLE ++++++++++++++++++++++++++++++++++++++++++++

.o-component-contact-block { padding: 50px 0;

  // A.1. GLOBAL STYLE ------------------------------------

  h2 { color: white; text-shadow: 0 0 5px black; align-self: center; text-align: center; width: 100%; margin-bottom: 30px; }

  // A.1. END ---------------------------------------------

  // B. MEDIA QUERIES -------------------------------------

  // B.1. GRACEFUL DEGRADATION -------------


  // B.1. END ------------------------------

  // B.2. PROGRESSIVE ENHANCEMENT ----------
  // 768px up
  @media ($sm-up) {  }

  // 991px up
  @media ($md-up) {
    h1 { color: green; }
  }

  // 1200px up
  @media ($lg-up) {  }

  // 1440px up
  @media ($xlg-up) {  }

  // B.2. END ------------------------------

  // B. END -----------------------------------------------

}

// END: BLOCK STYLE +++++++++++++++++++++++++++++++++++++++

</style>

