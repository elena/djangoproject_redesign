from django.views.generic import TemplateView


class Index(TemplateView):
    """
    A view of the homepage.
    """
    template_name = "home.html"


class WhyDjango(TemplateView):
    """
    A view of the "Why Django" page.
    """
    nav = "why_django"
    template_name = "why_django.html"


class GetStarted(TemplateView):
    """
    A view of the "Get Started" page.
    """
    nav = "get_started"
    template_name = "get_started.html"


class NewsIndex(TemplateView):
    """
    A view of the "News/Events page.
    """
    nav = "news"
    template_name = "news_index.html"

class NewsDetail(TemplateView):
    """
    A view of a news or event item.
    """
    nav = "news"
    template_name = "news_detail.html"