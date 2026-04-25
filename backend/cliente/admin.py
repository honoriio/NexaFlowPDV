from django.contrib import admin
from .models import Cliente

# Modo mais moderno e limpo de registrar o Model no Admin
@admin.register(Cliente)
class ClienteAdmin(admin.ModelAdmin):
    # Aqui você pode até adicionar colunas para aparecer na listagem
    list_display = ('nome', 'cpf', 'telefone') 
    
    # A class Media TEM que ter esse recuo (Tab/Espaços) para ficar dentro do ClienteAdmin
    class Media:
        js = ('js/mascaras_admin.js',)