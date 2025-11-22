from rest_framework_simplejwt.serializers import TokenObtainPairSerializer


class CustomToken_Serializers(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)
    
        data.update({
            'username':self.user.username,
            'date':self.user.date_joined

        })
        return data

 
