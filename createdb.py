#!/usr/bin/env python

import psycopg2
import os

"""
Create a database using the specified project settings. Only Postgres is supported
"""


def create_dbs():
    print("Creating database...")
    django_settings = __import__(os.environ['DJANGO_SETTINGS_MODULE'], fromlist='DATABASES')
    print("Got settings...")
    databases = django_settings.DATABASES
    for name, db in databases.iteritems():
        host = db['HOST']
        user = db['USER']
        password = db['PASSWORD']
        port = str(db['PORT'])
        db_name = db['NAME']
        db_type = db['ENGINE']
        assert db_type.endswith('postgresql_psycopg2'), "Only Postgres is supported"
        print 'Creating database %s on %s:%s.' % (db_name, host, port)
        con = psycopg2.connect(host=host, user=user, password=password, port=port, database='postgres')
        con.set_isolation_level(0)
        cur = con.cursor()
        try:
            cur.execute('CREATE DATABASE %s' % db_name)
        except psycopg2.ProgrammingError as detail:
            print detail
            print 'Could not finish creating database. That may be because it exists already.'


if __name__ == '__main__':
    import sys
    from django_website.wsgi import *
    create_dbs()
