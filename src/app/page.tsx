"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";

const easeOut = [0.22, 1, 0.36, 1] as const;

export default function Home() {
  return (
    <div className="pb-12 pt-20">
      {/* Hero */}
      <AnimatedSection
        id="home"
        className="mx-auto flex min-h-[78vh] max-w-5xl flex-col justify-center px-6 py-10 sm:flex-row sm:items-center sm:justify-between sm:gap-10"
      >
        <div className="flex flex-col sm:max-w-xl">
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: easeOut }}
            className="font-serif text-5xl font-medium leading-[1.08] tracking-tight text-zinc-100 md:text-6xl lg:text-7xl"
          >
            gna is here.
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.65, ease: easeOut }}
            className="mt-8 max-w-md"
          >
            <p className="text-base italic text-gray-300 md:text-lg">Welcome.</p>
            <div
              className="mt-3 h-px w-12 bg-gradient-to-r from-gray-500/80 to-transparent"
              aria-hidden
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28, duration: 0.55 }}
            className="mt-12 flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="rounded-full bg-accent px-7 py-2.5 text-sm font-semibold text-zinc-900 shadow-sm transition hover:brightness-110 active:brightness-95"
            >
              查看项目
            </a>
            <a
              href="https://github.com/gna-z"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/35 bg-transparent px-7 py-2.5 text-sm font-medium text-zinc-200 transition hover:border-white/55 hover:text-white"
            >
              GitHub
            </a>
          </motion.div>
        </div>

        <div className="mt-10 flex justify-center sm:mt-0 sm:flex-1 sm:justify-end">
          <img
            src="/touxiang.jpg"
            alt="头像"
            className="h-44 w-44 rounded-3xl object-cover shadow-2xl shadow-black/25 ring-1 ring-white/10 md:h-64 md:w-64"
            loading="eager"
            decoding="async"
          />
        </div>
      </AnimatedSection>

      {/* 关于我 */}
      <AnimatedSection id="about" className="mx-auto max-w-5xl px-6 py-12 md:py-14">
        <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500">
          关于我
        </h2>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-zinc-200 md:text-xl">
          从 C 语言入门，如今正深入 Java 生态，持续搭建更扎实的工程基础。
        </p>
        <div className="mt-10 rounded-2xl border border-white/10 bg-zinc-900/30 p-6 backdrop-blur-sm md:p-8">
          <h3 className="text-sm font-medium text-zinc-400">教育</h3>
          <p className="mt-2 text-white">大连海事大学 · 软件工程 · 2024级</p>
        </div>
        <div className="mt-12">
          <h3 className="text-sm font-medium text-zinc-400">技术成长路线</h3>
          <ol className="relative mt-8 space-y-0 border-l border-white/15 pl-8">
            {[
              { phase: "大一", items: "C 语言", current: false },
              { phase: "大二", items: "Java、HTML / CSS", current: false },
              {
                phase: "当前",
                items: "Java 进阶、Spring Boot 入门",
                current: true,
              },
            ].map((step) => (
              <li key={step.phase} className="relative pb-8 last:pb-0">
                <span
                  className={`absolute -left-[5px] top-1.5 size-2.5 rounded-full border-2 border-zinc-900 ${
                    step.current
                      ? "bg-white/90 border-white/50"
                      : "bg-zinc-500"
                  }`}
                  aria-hidden
                />
                <p className="text-sm text-zinc-500">{step.phase}</p>
                <p className="mt-1 text-zinc-200">{step.items}</p>
              </li>
            ))}
          </ol>
        </div>
      </AnimatedSection>

      {/* 项目 */}
      <AnimatedSection id="projects" className="mx-auto max-w-5xl px-6 py-12 md:py-14">
        <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500">
          项目
        </h2>
        <p className="mt-3 max-w-2xl text-2xl font-medium text-white md:text-3xl">作品集</p>
        <ul className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          <motion.li
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-8%" }}
            transition={{ duration: 0.55, ease: easeOut }}
            className="group flex h-full flex-col rounded-2xl border border-white/10 bg-zinc-900/35 p-7 backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:shadow-xl hover:shadow-black/20"
          >
            <h3 className="text-lg font-semibold text-white">扫雷小游戏</h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">
              使用 C 语言 / Java 实现经典扫雷逻辑：雷区生成、翻开连锁、旗标与胜负判定，练习基础语法与控制台 / 简易界面交互。
            </p>
            <p className="mt-4 text-xs text-zinc-500">技术栈：C / Java</p>
            <a
              href="https://github.com/gna-z/gna-demo"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex w-fit text-sm font-medium text-accent transition hover:brightness-110"
            >
              在 GitHub 查看 →
            </a>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-8%" }}
            transition={{ delay: 0.08, duration: 0.55, ease: easeOut }}
            className="group flex h-full flex-col rounded-2xl border border-white/10 bg-zinc-900/25 p-7 backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:border-white/15 hover:shadow-lg hover:shadow-black/15"
          >
            <h3 className="text-lg font-semibold text-zinc-300">敬请期待</h3>
            <p className="mt-3 flex-1 text-sm text-gray-400">
              更多项目正在筹备中，将持续更新。
            </p>
          </motion.li>
        </ul>
      </AnimatedSection>

      {/* 技能 */}
      <AnimatedSection id="skills" className="mx-auto max-w-5xl px-6 py-12 md:py-14">
        <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500">
          技能
        </h2>
        <p className="mt-3 max-w-2xl text-2xl font-medium text-white md:text-3xl">能力图谱</p>

        <div className="mt-12 space-y-10">
          <div>
            <h3 className="text-sm font-medium text-zinc-400">已掌握</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {["C 语言", "Java 基础", "HTML / CSS"].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm text-zinc-200"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-medium text-zinc-400">学习中</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {[
                "Java 高级特性",
                "数据库基础",
                "Spring 框架入门",
              ].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-accent/60 bg-zinc-950/40 px-4 py-1.5 text-sm text-zinc-100 shadow-accent-soft transition hover:border-accent hover:shadow-accent-soft"
                >
                  ⚡进行中 · {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* 联系 */}
      <AnimatedSection id="contact" className="mx-auto max-w-5xl px-6 py-12 md:pb-8 md:pt-14">
        <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-white/70">
          联系
        </h2>
        <p className="mt-4 max-w-2xl text-xl font-medium leading-snug text-white md:text-2xl">
          期待在项目中不断成长，欢迎交流。
        </p>
        <div className="mt-8 flex flex-col gap-3 text-sm text-white/80">
          <a
            href="mailto:linazhong@dlmu.edu.cn"
            className="w-fit transition hover:text-white"
          >
            linazhong@dlmu.edu.cn
          </a>
          <a
            href="https://github.com/gna-z"
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit transition hover:text-white"
          >
            GitHub @gna-z
          </a>
        </div>
      </AnimatedSection>

      <footer className="mx-auto max-w-5xl px-6 pb-8 pt-4 text-center text-sm text-zinc-600">
        © 2025 gna
      </footer>
    </div>
  );
}
