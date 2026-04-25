// static/js/mascaras_admin.js

document.addEventListener('DOMContentLoaded', function() {
    
    // ==========================================
    // MÁSCARA PARA O CPF (000.000.000-00)
    // ==========================================
    const cpfInput = document.querySelector('#id_cpf');
    if (cpfInput) {
        cpfInput.addEventListener('input', function(e) {
            let value = e.target.value;
            value = value.replace(/\D/g, ''); 
            value = value.replace(/(\d{3})(\d)/, '$1.$2'); 
            value = value.replace(/(\d{3})(\d)/, '$1.$2'); 
            value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2'); 
            e.target.value = value;
        });
        cpfInput.setAttribute('maxlength', '14'); 
    }

    // ==========================================
    // MÁSCARA PARA O CNPJ (00.000.000/0000-00)
    // ==========================================
    const cnpjInput = document.querySelector('#id_cnpj');
    if (cnpjInput) {
        cnpjInput.addEventListener('input', function(e) {
            let value = e.target.value;
            value = value.replace(/\D/g, ''); 
            value = value.replace(/(\d{2})(\d)/, '$1.$2'); 
            value = value.replace(/(\d{3})(\d)/, '$1.$2'); 
            value = value.replace(/(\d{3})(\d)/, '$1/$2'); 
            value = value.replace(/(\d{4})(\d{1,2})$/, '$1-$2'); 
            e.target.value = value;
        });
        cnpjInput.setAttribute('maxlength', '18'); 
    }

    // ==========================================
    // MÁSCARA PARA O RG (Padrão SP: 00.000.000-X)
    // ==========================================
    const rgInput = document.querySelector('#id_rg');
    if (rgInput) {
        rgInput.addEventListener('input', function(e) {
            // Converte para maiúsculo para garantir o 'X'
            let value = e.target.value.toUpperCase(); 
            
            // Remove tudo que não for número e não for 'X'
            value = value.replace(/[^\dX]/g, ''); 
            
            value = value.replace(/(\d{2})(\d)/, '$1.$2'); // Primeiro ponto
            value = value.replace(/(\d{3})(\d)/, '$1.$2'); // Segundo ponto
            value = value.replace(/(\d{3})([\dX])/, '$1-$2'); // Traço
            
            e.target.value = value;
        });
        // 00.000.000-X tem exatamente 12 caracteres
        rgInput.setAttribute('maxlength', '12'); 
    }

    // ==========================================
    // MÁSCARA PARA O TELEFONE (+55)
    // ==========================================
    const telInput = document.querySelector('#id_telefone'); 
    if (telInput) {
        const maskPhone = (value) => {
            let v = value.replace(/\D/g, ''); 
            
            if (v.length > 0 && !v.startsWith('55')) {
                v = '55' + v;
            }
            
            v = v.replace(/^(\d{2})(\d)/g, '+$1 ($2');   
            v = v.replace(/(\(\d{2})(\d)/, '$1)$2');      
            v = v.replace(/(\)\d{5})(\d)/, '$1-$2');      
            
            return v.substring(0, 18); 
        };

        telInput.addEventListener('input', function(e) {
            e.target.value = maskPhone(e.target.value);
        });

        if (telInput.value) {
            telInput.value = maskPhone(telInput.value);
        }
    }
});