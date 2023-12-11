export type DictionaryDefinition = [
{
        word: string,
        phonetic?: string,
        phonetics: Phonetic[],
        meanings: Meaning[],
        license: License,
        sourceUrls: string[]
    }
]

export type Phonetic = {
    audio: string,
    sourceUrl?: string,
    license?: {
        name: string,
        url: string
    }
    text?: string
}

export type Meaning = {
    partOfSpeech: string,
    definitions: Definition[],
    synonyms: string[],
    antonyms: string[],
    example?: string
}

export type Definition = {
    definition: string,
    synonyms: string[],
    antonyms: string[]
}

export type License = {
    name: string,
    url: string
}