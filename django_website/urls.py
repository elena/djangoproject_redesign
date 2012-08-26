from django.conf import settings
from django.conf.urls import include, patterns, static, url

from django.contrib import admin
admin.autodiscover()


urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'django_website.views.home', name='home'),
    # url(r'^django_website/', include('django_website.foo.urls')),
    url(r'^admin/doc/', include('django.contrib.admindocs.urls')),
    ),
    url(r'^admin/', include(admin.site.urls)),
) + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT, show_indexes=True)