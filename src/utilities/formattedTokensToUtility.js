export default function formattedTokensToUtility(tokens) {
    const classes = []
    // const color = []
    for (let colorIndex = 0; colorIndex < tokens.length; colorIndex++) {
        const color = []
        for (let hueIndex = 0; hueIndex < tokens[hueIndex].hues.length; hueIndex++) {
            color.push(
                `.bg-${tokens[colorIndex].name.toLowerCase()}-${
                    tokens[colorIndex].hues[hueIndex].hue
                }{ background-color: var(${tokens[colorIndex].hues[hueIndex].class}) }`
            )
        }
        classes.push(...color)
    }
    return classes
}
