from django.views.generic import TemplateView


class Home(TemplateView):
    """
    A view of the homepage.
    """
    template_name = "home.html"
