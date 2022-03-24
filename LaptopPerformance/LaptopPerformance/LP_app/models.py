from django.db import models
import datetime
from datetime import date

# Create your models here.

class AllSystem(models.Model):
    serial_no = models.CharField(max_length=100)
    username = models.CharField(max_length=100)
    ram_size = models.CharField(max_length=100)
    ssd_size = models.CharField(max_length=100)
    timestamp = models.DateTimeField(auto_now_add=False)
    # system_config = models.FileField()
    # generate_report = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.username

class HeaderOverview(models.Model):
    no_of_system_connect_with_server = models.IntegerField()
    no_of_data_received = models.IntegerField()
    no_of_data_not_received = models.IntegerField()
    total_users = models.IntegerField()
    date = models.DateField(("Date"), default=date.today)

    # def __str__(self):
    #     return self.no_of_system_connect_with_server

class UserDataSummary(models.Model):
    all_system = models.ForeignKey(AllSystem,on_delete=models.CASCADE)
    reason = models.CharField(max_length=100)

class Notification(models.Model):
    noti_id = models.AutoField(primary_key=True)
    date_created = models.DateTimeField(default=datetime.datetime.now)
    seen = models.BooleanField(default=False)
    message = models.CharField(max_length=100)
    
