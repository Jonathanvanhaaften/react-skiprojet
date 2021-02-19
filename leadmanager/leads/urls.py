from rest_framework import routers
from .api import LeadViewSet

router = routers.DefaultRouter()
routers.register('api/leads', LeadViewSet, 'leads')


urlpatterns = router.urls
