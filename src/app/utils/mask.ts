export function getMask(m: string) {
  switch (m) {
    case 'telefone':
      const d8Mask = ['(', /[1-9]/, /\d/, ')', /[1-9]/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
      return {
        guide: false,
        mask: () => {
          return d8Mask;
        },
        remove: (v: string) => v.replace(/[()-]/g, ''),
        pipe: (conformedValue, config) => {
          if (conformedValue === '(') {
            return false;
          }
          return conformedValue;
        }
      };
    case 'celular':
      const d9Maskcel = ['(', /[1-9]/, /\d/, ')', /[1-9]/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
      return {
        guide: false,
        mask: () => {
          return d9Maskcel;
        },
        remove: (v: string) => v.replace(/[()-]/g, ''),
        pipe: (conformedValue, config) => {
          if (conformedValue === '(') {
            return false;
          }
          return conformedValue;
        }
      };
    case 'cpf':
      const mask = [/[0-9]/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/];
      return {
        guide: false,
        mask: () => {
          return mask;
        },
        remove: (v: string) => v.replace(/[()-]/g, ''),
        pipe: (conformedValue, config) => {
          if (conformedValue === '(') {
            return false;
          }
          return conformedValue;
        }
      };
    case 'cep':
      const cepMask = [/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/]
      return {
        guide: false,
        mask: () => {
          return cepMask;
        },
        remove: (v: string) => v.replace(/[-]/g, ''),
        pipe: (conformedValue, config) => {
          return conformedValue;
        }
      }
    case 'cnpj':
      const cnpjMask = [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/]
      return {
        guide: false,
        mask: () => {
          return cnpjMask
        }
      };
    default:
      break;
  }
}