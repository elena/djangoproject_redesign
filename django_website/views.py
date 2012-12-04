from django.views.generic import TemplateView


class Index(TemplateView):
    """
    A view of the homepage.
    """
    template_name = "home.html"


class WhyDjango(TemplateView):
    """
    A view of the homepage.
    """
    template_name = "why_django.html"


class GetStarted(TemplateView):
    """
    A view of the "Get Started" page.
    """
    template_name = "get_started.html"
