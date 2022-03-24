from django.template import Library

register=Library()

@register.filter
def upper(value):
   return value.upper()