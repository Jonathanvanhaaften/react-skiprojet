from rest_framework import serializers
from leads.models import Lead

# lead serializer meta to json


class LeadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lead
        fields = '__all__'
