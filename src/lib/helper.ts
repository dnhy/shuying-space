import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

export const clsxm = (...args: unknown[]) => {
  return twMerge(clsx(args))
}

export const escapeHTMLTag = (html: string) => {
  const lt = /</g,
    gt = />/g,
    ap = /'/g,
    ic = /"/g
  return html
    .toString()
    .replaceAll(lt, '&lt;')
    .replaceAll(gt, '&gt;')
    .replaceAll(ap, '&#39;')
    .replaceAll(ic, '&#34;')
}

export const safeJsonParse = (str: string) => {
  try {
    return JSON.parse(str)
  } catch {
    return null
  }
}

/**
 * 解决 n 皇后问题
 * @param n 棋盘大小（n x n）
 * @returns 返回所有可能的解，每个解是一个数组，表示每行皇后所在的列位置（从0开始）
 * 
 * @example
 * solveNQueens(4)
 * // 返回: [[1, 3, 0, 2], [2, 0, 3, 1]]
 * // 第一个解表示：第0行皇后在第1列，第1行皇后在第3列，第2行皇后在第0列，第3行皇后在第2列
 */
export const solveNQueens = (n: number): number[][] => {
  const solutions: number[][] = []
  const board: number[] = [] // board[i] 表示第 i 行皇后所在的列位置

  /**
   * 检查在 row 行 col 列放置皇后是否安全
   */
  const isSafe = (row: number, col: number): boolean => {
    // 检查之前所有行的皇后位置
    for (let i = 0; i < row; i++) {
      const prevCol = board[i]
      
      // 检查是否在同一列
      if (prevCol === col) {
        return false
      }
      
      // 检查是否在同一对角线上
      // 主对角线：行差等于列差
      // 副对角线：行差等于列差的相反数
      if (Math.abs(row - i) === Math.abs(col - prevCol)) {
        return false
      }
    }
    
    return true
  }

  /**
   * 回溯算法求解
   */
  const backtrack = (row: number): void => {
    // 如果已经放置了 n 个皇后，找到一个解
    if (row === n) {
      solutions.push([...board]) // 保存当前解
      return
    }

    // 尝试在当前行的每一列放置皇后
    for (let col = 0; col < n; col++) {
      if (isSafe(row, col)) {
        // 放置皇后
        board[row] = col
        // 继续下一行
        backtrack(row + 1)
        // 回溯：移除当前行的皇后（实际上不需要显式移除，因为会被覆盖）
      }
    }
  }

  // 从第 0 行开始回溯
  backtrack(0)
  
  return solutions
}
