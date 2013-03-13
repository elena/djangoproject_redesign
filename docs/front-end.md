# Front End Notes

## Layout

There are two basic types of layouts: standard and full width. 

Standard is in place by default, and contains two 'content areas': `block body` and `block sidebar` (see the News and Events page for an example). When using the standard, `block sidebar` should contain a visually hidden h1 that labels the sidebar as 'Additional Information'. The contents should also be contained in a div, with a `role="complementary"`. 

The second type of layout is a "full width" layout which contains three content areas: The same `block body` as the default layout, with a `block secondary` and `block tertiary` thrown in (an example of this can be seen on the 'Why Django' page). Do not use the `block sidebar` with the full width layout. Full width layout is instituted by injecting `{% block layout_class %}full-width{% endblock %}` at the top of the template. Also note, `block secondary` and `block tertiary` are optional, but `block tertiary` should not be used without first using `block secondary`. 

*Do not use block tertiary with a standard layout. 




## CSS Modules

### Header
The `block header` is where the h1 with the page title should go. Any relevant taglines of the page should be placed here as `<p>` tags. 
- two column layout module
- list modules


## Interactive (JavaScript) Modules

- Feature List (single instance)
- Mobile Menu (single instance)
- Expand/Collapse Menu
