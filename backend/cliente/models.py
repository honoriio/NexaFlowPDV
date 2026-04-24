from django.db import models
from phonenumber_field.modelfields import PhoneNumberField # type: ignore
from localflavor.br.models import BRCPFField, BRCNPJField # pyright: ignore[reportMissingImports]


# Create your models here.

LISTA_GENERO = [
    ("MASCULINO", "Masculino"),
    ("FEMININO", "Feminino"),
    ("OUTRO", "Outro"),
]


class Base(models.Model):
    criacao = models.DateField(auto_now_add=True)
    atualizacao = models.DateField(auto_now=True)
    ativo = models.BooleanField(default=True)

    class Meta:
        abstract = True



class Cliente(Base):
    name = models.CharField(max_length=100)
    genero = models.CharField(max_length=10, choices=LISTA_GENERO)
    cpf = BRCPFField(verbose_name="CPF", unique=True, null=True, blank=True)
    cnpj = BRCNPJField(verbose_name="CNPJ", blank=True, unique=True, null=True)
    rg = models.CharField(max_length=20, blank=True, null=True) 
    name_father = models.CharField(max_length=100, blank=True, null=True)
    name_mother = models.CharField(max_length=100, blank=True, null=True)
    email = models.EmailField(unique=True)
    telephone = PhoneNumberField(unique=True)
    observation = models.TextField(blank=True)
    extra_information = models.TextField(blank=True)

    class Meta:
        ordering = ['name']
        verbose_name = 'Cliente'
        verbose_name_plural = 'Clientes'

    def __str__(self):
        return self.name