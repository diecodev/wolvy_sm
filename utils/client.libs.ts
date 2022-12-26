import { IFormData, TOptions, CreateOrderProps } from 'index'

export const createFormData = (formElement: HTMLFormElement): IFormData => {
  const data: IFormData = {
    principal: {
      name: '',
      id: 0
    },
    salsas: [],
    toppins: [],
    extras: [],
    price: 0
  }
  const form = new FormData(formElement)
  const options = Object.fromEntries(form.entries())
  let total = 0

  for (const [key] of Object.entries(options)) {
    const keyindex = key.split('-')[0].toLocaleLowerCase()
    const name = key.split('-')[1].replaceAll('_', ' ')
    const id = Number(key.split('-')[2])
    total += Number(key.split('-')[3])

    if (keyindex === 'principal') {
      data[keyindex] = {
        name,
        id
      }
      continue
    }

    data[keyindex] = [...data[keyindex] as TOptions[], { name, id }]
  }

  data.price = total

  return data
}

export const createOrder = async (data: CreateOrderProps): Promise<string | boolean> => {
  const res = await fetch('/api/order', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })

  return res.ok ? (await res.json()).id : false
}
