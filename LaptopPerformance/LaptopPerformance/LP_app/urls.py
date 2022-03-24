from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('systems/', views.systems, name='systems'),
    path('p2p_comparison/', views.p2p_comparison, name='p2p_comparison'),
    path('peak_detection/', views.peak_detection, name='peak_detection'),

    path('system_configuration/<str:serial_no>/', views.system_configuration, name='system_configuration'),
    path('generate_report/<str:serial_no>/', views.generate_report, name='generate_report'),

    path('get_filtering_date/',views.get_filtering_date,name='get_filtering_date'),
    path('get_graph_data/',views.get_graph_data,name='get_graph_data'),
    path('generate_loader/',  views.generate_loader ,name='generate_loader'),


]