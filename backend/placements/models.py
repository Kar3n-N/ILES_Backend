from django.db import models
from django.conf import settings
from django.utils import timezone

class InternshipPlacement(models.Model):
    student = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name='placements',
        null=True
    )
    company_name = models.CharField(max_length=200,null=True)
    start_date = models.DateTimeField(default=timezone.now)
    end_date = models.DateTimeField(default=timezone.now)
    supervisor = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.SET_NULL,
        null=True,
        related_name='supervised_placements'
    )

    def __str__(self):
        return f"{self.student} @ {self.company_name}" 



