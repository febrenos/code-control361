import { apiSandbox } from '@/services'

export const createUserService = async () => {
  const formData = new FormData()

  const response = await apiSandbox.post(
    '/v1/workflows/create',
    {},
    {
      headers: {
        'Content-Type': 'multipart/formdata',
      },
    },
  )

  return response.data
}
// const fomCartaoCnpj = new FormData();
//       fomCartaoCnpj.append('id_client', '1');
//       fomCartaoCnpj.append('identify', signup.identify);
//       fomCartaoCnpj.append('image', signup.cartao_cnpj_url);
//       fomCartaoCnpj.append('tipo_arquivo', 'CNPJ');

//       const uploadCartaoCnpj = await upload.post('/upload', fomCartaoCnpj, {
//         headers: {
//           Authorization: `Bearer ${auth.token}`,
//           'Content-Type': 'multipart/formdata',
//         },
//       });
