import OpenAI from 'openai'

export const chat = async (prompt: string) => {
  const openai = new OpenAI({
    apiKey: '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',
    dangerouslyAllowBrowser: true
  })
  const response = await openai.chat.completions.create({
    messages: [{ role: 'user', content: prompt }],
    model: 'gpt-3.5-turbo'
  })
  return response.choices[0].message.content
}