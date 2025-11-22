from rest_framework.views import APIView
from rest_framework.response import Response
from .models import User
from .serializers import *
from django.contrib.auth import authenticate
from .serializers import CustomToken_Serializers


class UserView(APIView):
    def post(self,request):
        new_user= User(username=request.data['username'])

        new_user.set_password(request.data['password'])
        new_user.save()

        return Response('new user creater')
    
class UserLoginView(APIView):
    def post(self,request):
        user_data=CustomToken_Serializers(data=request.data)
        print(request.data)
        if user_data.is_valid():
            return Response(user_data.validated_data)
        else:
            return Response(user_data.errors)




    # def post(self, request):
    #     user_verification= authenticate(username=request.data['username'],password=request.data['password'])
    #     # print(user_verification)

    #     if user_verification == None:
    #          return Response ('username or password is invalid . Try again!!!')
    #     else:
    #         return Response('valid user')

