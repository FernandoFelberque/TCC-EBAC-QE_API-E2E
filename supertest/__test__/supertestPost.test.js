const request = require('supertest');


describe('Funcionalidade da API para criar Coupons', () => {

    it('Deve Criar Cupom com Sucesso', async () => {

        const response = await request('http://lojaebac.ebaconline.art.br')
            .post('/wp-json/wc/v3/coupons')
            .auth('admin_ebac', '@admin!&b@c!2022')

            .send({
                code: "SupertestTest" + Math.random(),
                amount: "10",
                discount_type: "fixed_product",
                description: "Cupom de desconto TCC"
            })
        expect(response.status).toEqual(201);

    });

    it('Validação do contrato', async () => {

        const response = await request('http://lojaebac.ebaconline.art.br')
            .post('/wp-json/wc/v3/coupons')
            .auth('admin_ebac', '@admin!&b@c!2022')

            .send({
                code: "SupertestTest" + Math.random(),
                amount: "10",
                discount_type: "nada",
                description: "Cupom de desconto TCC"
            })
        expect(response.status).toEqual(400);

    });

    it('Nome Do Cupom deve ser unico', async () => {

        const response = await request('http://lojaebac.ebaconline.art.br')
            .post('/wp-json/wc/v3/coupons')
            .auth('admin_ebac', '@admin!&b@c!2022')

            .send({
                code: "test",
                amount: "10",
                discount_type: "fixed_product",
                description: "Cupom de desconto TCC"
            })
        expect(response.status).toEqual(400);

    });

});