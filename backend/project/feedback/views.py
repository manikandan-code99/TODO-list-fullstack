from django.shortcuts import render

# Create your views here.
from rest_framework.response import Response
from .models import Feedback
from rest_framework import generics
from .serializers import FeedbackSerializer
from rest_framework.permissions import IsAuthenticated


class FeedbackListCreateView(generics.ListCreateAPIView):
    serializer_class = FeedbackSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Feedback.objects.filter(user=self.request.user).order_by("-created_at")

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


# class FeedbackAPI(APIView):                 ##apiview with serializers
#     permission_classes= [IsAuthenticated]
#     def post(self,request):
#         new_task= FeedbackSerializer(data= request.data)

#         if new_task.is_valid():
#             new_task.save()
#             return Response("new task")
#         else:
#             return Response(new_task.errors)
        
#     def get(self, request,task_id=None):
#         if task_id==None:
#             all_task= Feedback.objects.all()
#             task_data= FeedbackSerializer(all_task,many=True).data
#             return Response(task_data)
#         else: 
#             task= Feedback.objects.get(id=task_id)
#             task_data= FeedbackSerializer(task).data
#             return Response(task_data)
       
#     def put(self,request,task_id):
#         task= Feedback.objects.get(id=task_id)
#         update_task=FeedbackSerializer(task,data=request.data,partial=True)

#         if update_task.is_valid():
#             update_task.save()
#             return Response("update  task")
#         else:
#             return Response(update_task.errors)
        
#     def patch(self,request,task_id):
#         task= Feedback.objects.get(id=task_id)
       
       
#         update_task=FeedbackSerializer(task,data=request.data)

#         if update_task.is_valid():
#             update_task.save()
#             return Response("update  task")
#         else:
#             return Response(update_task.errors)
            
#     def delete(self, request, task_id):
#         task = Feedback.objects.get(id=task_id)
#         task.delete()
#         return Response('delete')
    
