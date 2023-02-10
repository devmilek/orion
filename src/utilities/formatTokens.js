// Format JS colors file from Figma Tokens
export default function formatTokens(tokens) {
    const formatedJson = []

    for (const colorKey in tokens) {
        const color = {}
        color.name = colorKey
        color.hues = []
        for (const hueKey in tokens[colorKey]) {
            const hues = {}
            hues.hue = hueKey
            hues.value = tokens[colorKey][hueKey].value
            hues.class = `--${colorKey.toLowerCase()}-${hueKey}`
            color.hues.push(hues)
        }
        formatedJson.push(color)
    }
    return formatedJson
}
