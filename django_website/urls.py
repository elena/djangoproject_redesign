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
    url(r'^about/$', views.About.as_view(), name="about"),
    url(r'^community/$', views.Community.as_view(), name="community"),
    url(r'^docs/$', views.DocsIndex.as_view(), name="docs"),
    url(r'^docs/example$', views.DocsDetail.as_view(), name="docs_detail"),
    url(r'^code/$', views.Code.as_view(), name="code"),
    url(r'^case_study/$', views.CaseStudy.as_view(), name="case_study"),
    url(r'^download/$', views.Download.as_view(), name="download"),
    url(r'^test/$', views.TestTemplate.as_view(), name="test_template"),
)

if settings.DEBUG:
    urlpatterns += staticfiles_urlpatterns()
    urlpatterns += patterns('',
        url(r'^media/(?P<path>.*)$', 'django.views.static.serve', {'document_root': settings.MEDIA_ROOT})
    )
