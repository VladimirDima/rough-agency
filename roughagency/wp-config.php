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
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'roughagency_db' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'root' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'OiN*N=Fd,%Qw)1B-m&ilzVo5]Q4dTW%97M]*ZK d|$G9T]Q&Z6V$F+i25Vf?@)Aj' );
define( 'SECURE_AUTH_KEY',  '[V8dA2=}bM.70uegN$3S1oz83Rh?NTD7~<qiA@qCghFi-P.B-I3g%Y,XP*hPU[qk' );
define( 'LOGGED_IN_KEY',    'EnRa !W0:(|$c;ZDZb^qRzUb6;N.;[fjNH8yv%02! ioP1ikUs4DFF@#?>C,5iF@' );
define( 'NONCE_KEY',        ';+ZT-TmuQ5m<!GNhb2KRqW6G9<%0<,rM~zoI^qj$3xAo|2;M4tl Vd[g92c7HV3h' );
define( 'AUTH_SALT',        '2@ :l`!^,~^ lXJTDW9cW]RH)MfAT~#pL6N*e+:Ma}CNiN^6G2<*[JwPvkX|Tre=' );
define( 'SECURE_AUTH_SALT', ')bqV[yT&bt$2&%sOI$wQ[4?Q)Fj#!tzg1f7@3q*dASp&AbUfy{XXPTP-qYBd1IX%' );
define( 'LOGGED_IN_SALT',   'j`?[$@,xB{y,06)p6lVA(lGMfXJ.TU; Ge@VUgpfyPK{etDVRfaugYf4t;tI@dGB' );
define( 'NONCE_SALT',       '@ep0);%E0R~qR5?BHgKIa=Y*UWGSbU>#CN<MKli^Y:v$f2THmW JST8vlrl]A h+' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
