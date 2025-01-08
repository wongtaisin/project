/**
 * 触发DOM事件
 * @param el DOM元素
 * @param type 事件类型
 */
const trigger = (el: HTMLElement, type: string): void => {
  el.dispatchEvent(new Event(type, { bubbles: true }))
}

/**
 * 格式化数字,保留4位小数
 * @param val 输入值
 * @returns 格式化后的字符串
 */
const formatNum = (val: string): string => val.replace(/^\D*([0-9]\d*\.?\d{0,4})?.*$/, '$1')

/**
 * 绑定输入框事件
 * @param el DOM元素
 * @param fmt 格式化函数
 */
const bindInput = (el: HTMLElement, fmt: (val: string) => string): void => {
  const input = el.querySelector('input') || el as HTMLInputElement
  if (!(input instanceof HTMLInputElement)) return

  const handleInput = () => {
    const formattedValue = fmt(input.value)
    if (input.value !== formattedValue) {
      input.value = formattedValue
      trigger(input, 'input')
    }
  }

  input.addEventListener('keyup', handleInput)
  input.addEventListener('blur', handleInput)
}

export default {
  // 数字输入指令,限制最大999999
  number: {
    bind: (el: HTMLElement): void => {
      bindInput(el, val => {
        const formatted = formatNum(val)
        return +formatted > 999999 ? formatted.slice(0, 6) : formatted || ''
      })
    }
  },

  // 折扣率输入指令,限制最大100
  discountRate: {
    bind: (el: HTMLElement): void => {
      bindInput(el, val => {
        const formatted = formatNum(val)
        return +formatted > 100 ? '100' : formatted
      })
    }
  },

  // 只允许输入1的指令
  one: {
    bind: (el: HTMLElement): void => bindInput(el, val => formatNum(val) ? '1' : '')
  }
}
