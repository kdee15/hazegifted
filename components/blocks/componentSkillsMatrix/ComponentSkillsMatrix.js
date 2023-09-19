import ComponentSkill from "../../molecules/componentSkill/ComponentSkill";
import classes from "./ComponentSkillsMatrix.module.scss";

function ComponentSkillsMatrix({ contentModule }) {
  console.log("contentModule", contentModule);

  const { title, skillList } = contentModule;
  return (
    <section className={`${classes.oSkillsBlock} container`}>
      <div className="row">
        <div className="col">
          <h2 className={`${classes.aBlockTitle} fntH2`}>{title}</h2>
        </div>
      </div>
      <div className={`${classes.oSkillsRow} row`}>
        {skillList.map((item) => (
          <div key={item.sys.id} className={classes.oSkill}>
            <ComponentSkill skill={item} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default ComponentSkillsMatrix;
