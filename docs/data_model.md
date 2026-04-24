# 📌 Usuário Principal (Conta de Administrador)

## Cadastro
- nome_completo:
- whatsapp:
- pais:
- email:
- senha:
  - mínimo 8 caracteres
  - incluir:
    - letras maiúsculas
    - letras minúsculas
    - números
    - caracteres especiais

---

# 👤 Clientes (Dentro do Ambiente do Usuário)

## Dados do Cliente
- nome:
- genero:
- cpf_cnpj:
- rg_ie:
- nome_pai:
- nome_mae:
- email:
- telefone:
  - incluir código do país
- observacao:
- informacoes_extras:

---

# 🏢 Fornecedor

## Identificação
- nome_razao_social:
- tipo_pessoa: (PF | PJ)
- cpf_cnpj:

## Contato
- telefone:
- email:

## Endereço
- cep:
- logradouro:
- numero:
- complemento:
- bairro:
- cidade:
- estado:
- pais:

## Fiscal
- inscricao_estadual:
- inscricao_municipal:

## Comercial
- tipo_fornecimento: (produto | servico | ambos)
- condicoes_pagamento:

## Controle
- observacoes:
- status: (ativo | inativo)
- criado_em:
- atualizado_em:

---

# 📦 Produto

## Dados do Produto
- nome:
- ean_ctn: (código de barras)
- codigo_produto:
- codigo_extra:

## Classificação
- categoria:
- subcategoria:

### Exemplo
- categoria: Eletrônicos
  - subcategoria: Celulares
  - subcategoria: Notebooks
  - subcategoria: Fones de ouvido

## Informações Comerciais
- marca:
- preco_venda:
- preco_custo:

## Controle de Estoque
- unidade_medida: (kg, unidade, etc.)
- venda_fracionada: (sim | não)

## Armazenamento
- localizacao:
  - setor:
  - prateleira:
  - posicao:

## Outros
- observacoes:
- foto_produto: