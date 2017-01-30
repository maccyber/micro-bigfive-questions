'use strict'

module.exports = (opts) => {
  if (!opts.file) return false
  const res = {
    totalQuestions: opts.file.length - 1,
    limit: opts.limit,
    totalPages: Math.round(opts.file.length / opts.limit),
    percentDone: Math.round(opts.page / (opts.file.length / opts.limit) * 100),
    page: opts.page,
    langCode: opts.langCode,
    from: (opts.page - 1) * opts.limit + 1,
    to: (opts.page - 1) * opts.limit + 1 + opts.limit
  }
  if (res.page > res.totalPages) {
    return { error: 'Reached page limit' }
  }
  const selected = opts.file.slice(res.from, res.to)
  res.data = selected.map((q) => { return { id: opts.file.indexOf(q), text: q } })
  return res
}
