from django.conf import settings
from django.conf.urls import patterns, url
from django.contrib.staticfiles.urls import staticfiles_urlpatterns

from django_website import views


urlpatterns = patterns('',
    url(r'^$', views.Index.as_view(), name="index"),
    url(r'^why/$', views.WhyDjango.as_view(), name="why"),
    url(r'^start/$', views.GetStarted.as_view(), name="start"),
    url(r'^news/$', views.NewsIndex.as_view(), name="news_index"),
    url(r'^news/example/$', views.NewsDetail.as_view(), name="news_detail"),
)

if settings.DEBUG:
    urlpatterns += staticfiles_urlpatterns()
    urlpatterns += patterns('',
        url(r'^media/(?P<path>.*)$', 'django.views.static.serve', {'document_root': settings.MEDIA_ROOT})
    )
