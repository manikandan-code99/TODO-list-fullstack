from .models import Feedback
from rest_framework import serializers    


class FeedbackSerializer(serializers.ModelSerializer):
    class Meta:
        model= Feedback
        fields= '__all__'
        read_only_fields = ["user", "created_at"]