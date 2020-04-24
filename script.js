let Clientcard = function () {
    this.getData = function() {
        this.firm = prompt('Введите наименование организации','ООО"Стая"');
        this.adress = prompt('Введите адрес организации', 'г.Минск, ул.Тимерязева,9');
        this.phone = prompt('Введите номер телефона организации', '+375 43 8769887');
        this.mail = prompt('Введите адрес эл.почты организации', 'staya@staya.by');
        this.name = prompt('Введите ФИО контактного лица организации', 'Андрей');
        this.unp = prompt('Введите УНП организации', '142124141');
        this.addData();
        };
    this.validData = function() {
        this.getData();
        let phonex = /^\+[0-9]{3} [0-9]{2} [0-9]{7}$/; 
        let a = phonex.test(this.phone);
        console.log(a);
        if(a == false) {
            alert('Ошибка ввода телефона');
            this.phone = 'error';
        }
        let mailex = /^[a-z]{1}[a-z0-9._-]{1,}@[a-z]{3,}[\.][a-z]{2,11}$/gi;
        a = mailex.test(this.mail);
        if(a == false) {
            alert('Ошибка ввода эл.почты');
            this.mail = 'error';
            
        }
        let unpex = /^[0-9]{9}$/;
        a = unpex.test(this.unp);
        if(a == false) {
            alert('Ошибка ввода УНП');
            this.unp = 'error';  
        }
    
    };    
        
    this.addData = function() {
        let a = confirm('Ввести дополнительные сведениея?');
        if(a == true) {
            this.add = prompt('Введите дополнительные сведения', 'кроссфит');
            
        }
            else {
                this.add = 'нет';
            } 
    };    

    this.get = function() {
        this.validData();

    };     
       
    
}

let card = new Clientcard();
card.get();
function addRow(){
    let row = confirm ('Добавить поле?');
    if(row == true) {
        let b = prompt('Введите данные', 'Время работы с 8.00 до 22.00');
        card.userAdd = b;
        console.log(card);
    }
    else{card.userAdd = '';}
} 
addRow();
document.write('<b>Организация: <\/b>',card.firm,'<\/br>', '<b>Адрес: <\/b>',card.adress,'<\/br>', '<b>Телефон: <\/b>'
,card.phone,'<\/br>','<b>Почта: <\/b>',card.mail,'<\/br>', '<b>Контактное лицо: <\/b>',card.name,'<\/br>', '<b>УНП: <\/b>'
,card.unp,'<\/br>', '<b>Доп.свеедения: <\/b>',card.add, '<\/br>', card.userAdd);

for(let key in card){
    console.log(card[key]);
}




