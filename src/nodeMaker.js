export default function nodeMaker(value = null, next = null) {
    return { value: value, next: next }
}