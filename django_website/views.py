from django.views.generic import TemplateView


class BaseSectionView(TemplateView):

    def get_context_data(self, **kwargs):
        context = super(BaseSectionView, self).get_context_data(**kwargs)
        context['section'] = getattr(self, 'nav', None)
        return context


class Index(BaseSectionView):
    """
    A view of the homepage.
    """
    template_name = "home.html"


class Overview(BaseSectionView):
    """
    A view of the "Why Django" page.
    """
    nav = "overview"
    template_name = "overview.html"


class GetStarted(BaseSectionView):
    """
    A view of the "Get Started" page.
    """
    nav = "get_started"
    template_name = "get_started.html"


class NewsIndex(BaseSectionView):
    """
    A view of the "News/Events page.
    """
    nav = "news"
    template_name = "news_index.html"


class NewsDetail(BaseSectionView):
    """
    A view of a news or event item.
    """
    nav = "news"
    template_name = "news_detail.html"

class About(BaseSectionView):
    """
    About Django page.
    """
    nav = "about"
    template_name = "about.html"


class Community(BaseSectionView):
    """
    Django Community page.
    """
    nav = "community"
    template_name = "community.html"

class DocsIndex(BaseSectionView):
    """
    Django Documentation.
    """
    nav = "docs"
    template_name = "docs_index.html"

class DocsDetail(BaseSectionView):
    """
    Django Documentation.
    """
    nav = "docs"
    template_name = "docs_detail.html"

class Code(BaseSectionView):
    """
    Django Code.
    """
    nav = "code"
    template_name = "code.html"

class CaseStudyIndex(BaseSectionView):
    """
    Django Example Case Study.
    """
    nav = "case_study_index"
    template_name = "case_study_index.html"

class CaseStudy(BaseSectionView):
    """
    Django Example Case Study.
    """
    nav = "case_study"
    template_name = "case_study.html"

class Download(BaseSectionView):
    """
    Django Download page.
    """
    nav = "download"
    template_name = "download.html"

class TestTemplate(BaseSectionView):
    """
    Test template for old markup
    """
    nav = "test"
    template_name = "test_template.html"

class Styleguide(BaseSectionView):
    """
    Django web styleguide
    """
    nav = "styleguide"
    template_name = "styleguide.html"