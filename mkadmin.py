#!/usr/bin/env python

"""
Setup a default admin user when database is first created.
"""

from django_website.wsgi import *
from django.contrib.auth.models import User
u, created = User.objects.get_or_create(username='admin')
if created:
    u.set_password('threespot')
    u.is_superuser = True
    u.is_staff = True
    u.save()
