import json

# Load dotCloud env file variables.
with open('/home/dotcloud/environment.json') as f:
    env = json.load(f)

DEBUG = True
TEMPLATE_DEBUG = DEBUG

COMPRESS_ENABLED = False

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'djangoproject',
        'USER': env['DOTCLOUD_DB_SQL_LOGIN'],
        'PASSWORD': env['DOTCLOUD_DB_SQL_PASSWORD'],
        'HOST': env['DOTCLOUD_DB_SQL_HOST'],
        'PORT': str(env['DOTCLOUD_DB_SQL_PORT']),
    }
}

INSTALLED_APPS_ENV_ADDITIONS = (
    'lockdown',
)

MIDDLEWARE_CLASSES_ENV_ADDITIONS = (
    'lockdown.middleware.LockdownMiddleware',
)

MEDIA_ROOT = "/home/dotcloud/data/media"
MEDIA_URL = "/media/"
STATIC_ROOT = "/home/dotcloud/volatile/static"
STATIC_URL = "/static/"

# Password that keeps staging under lock and key
LOCKDOWN_PASSWORD = 'djangopreview'
