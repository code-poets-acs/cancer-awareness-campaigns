import OpenAI from 'openai'

const secret = 'c2stMWhQWER0eXE0dkpsWEwwSDJYUEJUM0JsYmtGSnY2VmhUdVliajNDUXk5Q0pZMTNZ'

export const chat = async (prompt: string) => {
  const openai = new OpenAI({
    apiKey: atob(secret),
    dangerouslyAllowBrowser: true
  })
  const response = await openai.chat.completions.create({
    messages: [{ role: 'user', content: prompt }],
    model: 'gpt-3.5-turbo'
  })
  return response.choices[0].message.content
}
