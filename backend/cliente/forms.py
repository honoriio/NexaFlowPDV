from django import forms
from django.core.exceptions import ValidationError
from .models import Cliente

class ClienteForm(forms.ModelForm):
    class Meta:
        model = Cliente

        fields = ['name', 'genero', 'cpf', 'cnpj', 'email', 'telephone']
        