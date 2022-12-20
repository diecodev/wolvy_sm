export interface IFormData {
  principal: number
  salsas: number[]
  toppins: number[]
  extras: number[]
}

export const createFormData = (formElement: HTMLFormElement): IFormData => {
  const data: IFormData = {
    principal: 0,
    salsas: [],
    toppins: [],
    extras: []
  }
  const form = new FormData(formElement)
  const options = Object.fromEntries(form.entries())

  for (const [key] of Object.entries(options)) {
    const keySplit = Number(key.split('_')[1])

    if (key.startsWith('Principal')) {
      data.principal = keySplit
    }
    if (key.startsWith('Salsas')) {
      data.salsas = [...data.salsas, keySplit]
    }
    if (key.startsWith('Toppins')) {
      data.toppins = [...data.toppins, keySplit]
    }
    if (key.startsWith('Extras')) {
      data.extras = [...data.extras, keySplit]
    }
  }

  return data
}

export const createOrder = async (data: IFormData[]): Promise<void> => {
  const res = await fetch('/api/order', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  const json = await res.json()
  console.log(json)
}
