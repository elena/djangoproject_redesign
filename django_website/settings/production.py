import json

# Load dotCloud env file variables.
with open('/home/dotcloud/environment.json') as f:
    env = json.load(f)


DEBUG = False
TEMPLATE_DEBUG = DEBUG

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

COMPRESS_ENABLED = True
COMPRESS_CSS_FILTERS = (
    'compressor.filters.css_default.CssAbsoluteFilter',
    'compressor.filters.cssmin.CSSMinFilter'
)
