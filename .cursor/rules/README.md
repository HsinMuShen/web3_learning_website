# Cursor Rules for Web3 Learning Website

This directory contains Cursor AI rules that help prevent common errors and enforce project patterns.

## 📋 Available Rules

### 1. **nextjs-architecture.mdc** (Always Active)
- Server vs Client component patterns
- Preventing hydration errors
- Module import restrictions
- File organization guidelines

**Key Prevention:** Importing `fs`/`path` in client components

### 2. **i18n-patterns.mdc** (Always Active)
- Multi-language support (EN, ES, ZH-TW)
- Correct function usage (`getServerTranslations`)
- MDX file structure for localization
- JSON configuration patterns

**Key Prevention:** Using wrong i18n function names

### 3. **design-system.mdc** (Always Active)
- Color palette (primary colors, not blue/purple)
- Typography standards
- Component patterns (Card, Button, Section)
- No dark mode classes

**Key Prevention:** Inconsistent styling and dark mode usage

### 4. **mdx-content.mdc** (Active for `content/blog/**/*.mdx`)
- Required frontmatter fields
- Available educational components
- Special character handling
- Multi-language file structure

**Key Prevention:** MDX parsing errors from special characters

### 5. **typescript-patterns.mdc** (Active for `**/*.{ts,tsx}`)
- Type safety patterns
- Interface definitions
- Null checks and type guards
- Type assertions with fallbacks

**Key Prevention:** Type errors and unsafe assertions

### 6. **component-patterns.mdc** (Active for `**/*.tsx`)
- Animation component usage
- Reusable UI components
- Client component state management
- Loading states and skeletons

**Key Prevention:** Creating duplicate styled components

### 7. **common-errors.mdc** (Always Active)
- Quick reference for frequent errors
- Error messages and solutions
- Fix checklists
- Package installation commands

**Key Prevention:** All common error patterns we encountered

## 🎯 What These Rules Prevent

Based on our conversation history:

✅ **Hydration Errors**
- Server/client localStorage mismatches
- Conditional rendering without mounting checks

✅ **Module Errors**
- Importing `fs`/`path` in client components
- Missing package installations (lucide-react)

✅ **i18n Errors**
- Using `getServerLocale()` instead of `getServerTranslations()`
- Missing language file versions

✅ **Design Inconsistencies**
- Using dark mode classes when not supported
- Complex gradients instead of simple backgrounds
- Custom cards instead of reusable Card component

✅ **MDX Errors**
- Special characters like `<` causing parse errors
- Missing component imports
- Incorrect frontmatter structure

✅ **TypeScript Errors**
- Unsafe type assertions
- Missing null checks
- Using `any` types

## 📖 How to Use

### Automatic Application

Rules are automatically applied based on their configuration:

- **Always Active:** Core rules that apply to every conversation
- **File-Specific:** Rules that activate when editing matching files

### Rule Format

Each rule is an `.mdc` file with frontmatter:

```markdown
---
description: What this rule does
globs: **/*.tsx  # Optional: file pattern
alwaysApply: true  # Or false for file-specific
---

# Rule Content
...
```

### Adding New Rules

1. Create new `.mdc` file in this directory
2. Add frontmatter with description and scope
3. Write concise, actionable guidelines
4. Include code examples (✅ GOOD vs ❌ BAD)

## 🔍 Quick Reference

### Most Important Rules

1. **Server/Client Separation** - Always check `'use client'` directive
2. **Use `getServerTranslations()`** - Not `getServerLocale()`
3. **Primary Colors** - Use `primary-*`, not `blue-*`/`purple-*`
4. **No Dark Mode** - Remove `dark:` classes
5. **Wait for Mount** - Use `useEffect()` for localStorage

### When You See These Errors

| Error | Check Rule |
|-------|------------|
| `Module not found: 'fs'` | nextjs-architecture.mdc |
| `Hydration failed` | nextjs-architecture.mdc |
| `getServerLocale is not exported` | i18n-patterns.mdc |
| `Unexpected character '<'` | mdx-content.mdc |
| Package not found | common-errors.mdc |

## 🚀 Benefits

These rules will help you:

- ✅ Avoid repeating the same errors
- ✅ Maintain consistent code style
- ✅ Follow Next.js best practices
- ✅ Keep design system consistent
- ✅ Reduce debugging time
- ✅ Onboard new developers faster

## 📝 Maintenance

### Updating Rules

Rules should be updated when:
- New patterns emerge in the project
- Common errors are discovered
- Design system changes
- New technologies are added

### Rule Best Practices

- Keep rules under 500 lines
- Use concrete code examples
- Include both ✅ GOOD and ❌ BAD examples
- Be specific and actionable
- Link related rules when appropriate

---

**Last Updated:** February 8, 2026  
**Total Rules:** 7  
**Always Active:** 4  
**File-Specific:** 3
