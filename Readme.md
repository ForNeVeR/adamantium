Adamantium
==========

Adamantium will be a (mostly) strongly typed language compiler for CLR. The
language syntax is similar to TypeScript, but there're additions that allow to
properly interoperate with the CLR type system.

Plan
----

1. Write a simple parser of TypeScript-like language in TypeScript itself. The
   parser should be complex enough to parse its own code.
2. We'll run this parser on any .NET-hosted JS runtime (for example,
   [jint](https://github.com/sebastienros/jint)).
3. We'll inject the stuff necessary for codegen (e.g. `System.Reflection.Emit`)
   into the same interpreter context, and write (or, better, generate) the
   typings for it.
4. We'll write a real codegen code with the parser, compile it with TypeScript
   and run it on the same interpreter.

Voilá, we have the compiler that can compile itself. This is a first step of
bootstrapping, and we may further improve the language.
