<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'haze');

/** MySQL database username */
define('DB_USER', 'root');
//define( 'DB_USER', 'dbuserstage' );

/** MySQL database password */
define('DB_PASSWORD', 'v1k1ng515');
//define( 'DB_PASSWORD', 'klingon.Beast187' );

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

define('FS_METHOD', 'direct');

/** WP ADMIN
user: haze
pass: admin.Haze098
*/

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'ZIb$YVJ[4I>h~JomaiL!>0kkQq`GgE&y:8dg/%#725H]cw-ZHSKKYy?(jt:t;9+#');
define('SECURE_AUTH_KEY',  'm]|Ob@FV>2^^H.8CY0#[}Q*EMZRq!S{ZglCphrl#5@cR&[L1FQr:T5orh%f9BE0h');
define('LOGGED_IN_KEY',    'GewdPy@aJVc]+ko1Sy9XsbM(ZUpf(-1V0<%RCD?B%Z;X{0!T2{Ot-6IEiVWB!XxE');
define('NONCE_KEY',        '~@:1:)q(hz?uOG?l;un=|Cnr}C])uJ#;3v_Ug<|b((/]n^Z5 ^L]D3xWx;+kB0nk');
define('AUTH_SALT',        'O`:CTtuj@z;i|{(7xEeLvD-K7*r2avnZ@f.^/0I#.A%~_he+rpjZ70IFiEe6;/r%');
define('SECURE_AUTH_SALT', '4w#q2n,JMFPO|CQr2RF6AXi.J1a`v`quK-uPVA;`,7B~>bM^~)6a8z?l|CyAylbh');
define('LOGGED_IN_SALT',   'Zi?{#ww^U(!cug)XN]A`m3~F;w(of4&Z&y*&n+((^9-e{!v0I~N_P8S?#v%y-L9p');
define('NONCE_SALT',       ',3InY_zkV&g.)[?j@l!G.@gC?}C|niFNK4,]kT?gb,~>M5s<73m5<>LLcc#,A{8P');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');

