
// Mock data for AI updates
export interface AIUpdate {
  id: string;
  title: string;
  summary: string;
  category: 'NLP' | 'CV' | 'RL' | 'Multimodal' | 'LLM' | 'Other';
  source: 'GitHub' | 'HuggingFace' | 'ArXiv';
  sourceUrl: string;
  date: string; // ISO date string
  tags: string[];
  stars?: number;
  downloads?: number;
  citations?: number;
}

export const aiUpdates: AIUpdate[] = [
  {
    id: '1',
    title: 'FastTransformer: A Lightweight Implementation for Faster Inference',
    summary: 'An optimized implementation of the transformer architecture that reduces inference time by 40% while maintaining comparable performance to standard models. Perfect for resource-constrained environments.',
    category: 'NLP',
    source: 'GitHub',
    sourceUrl: 'https://github.com/example/fasttransformer',
    date: '2025-03-25T14:00:00Z',
    tags: ['transformers', 'optimization', 'inference', 'nlp'],
    stars: 1245
  },
  {
    id: '2',
    title: 'MultiModal-GPT: Unified Vision and Language Understanding',
    summary: 'A new multimodal model that combines visual and textual understanding in a single architecture. Can interpret images, videos, and text seamlessly within the same context window.',
    category: 'Multimodal',
    source: 'HuggingFace',
    sourceUrl: 'https://huggingface.co/models/example/multimodal-gpt',
    date: '2025-03-23T10:30:00Z',
    tags: ['multimodal', 'vision', 'language', 'gpt'],
    downloads: 45892
  },
  {
    id: '3',
    title: 'Efficient Fine-tuning of Large Language Models with Parameter-Efficient Transfer Learning',
    summary: 'This paper introduces a novel approach to fine-tuning LLMs that reduces computational requirements by 90% while achieving comparable performance to full fine-tuning. The method focuses on adapter layers and selective parameter updates.',
    category: 'LLM',
    source: 'ArXiv',
    sourceUrl: 'https://arxiv.org/abs/example.2025.12345',
    date: '2025-03-22T08:15:00Z',
    tags: ['fine-tuning', 'llm', 'transfer-learning', 'efficiency'],
    citations: 28
  },
  {
    id: '4',
    title: 'DiffusionGPT: Text-guided Image Generation with Improved Coherence',
    summary: 'A new diffusion model that generates images with better adherence to textual prompts, especially for complex scenes with multiple objects and specific spatial relationships.',
    category: 'CV',
    source: 'GitHub',
    sourceUrl: 'https://github.com/example/diffusiongpt',
    date: '2025-03-20T22:45:00Z',
    tags: ['diffusion', 'image-generation', 'text-to-image'],
    stars: 3578
  },
  {
    id: '5',
    title: 'RewardLearner: Learning from Human Preferences without Explicit Rewards',
    summary: 'A reinforcement learning framework that learns directly from human feedback without requiring explicit reward functions. Shows improved alignment with human intentions in complex decision-making tasks.',
    category: 'RL',
    source: 'HuggingFace',
    sourceUrl: 'https://huggingface.co/papers/example/rewardlearner',
    date: '2025-03-19T15:20:00Z',
    tags: ['reinforcement-learning', 'human-feedback', 'alignment'],
    downloads: 12567
  },
  {
    id: '6',
    title: 'MindReader: Brain Activity to Text Translation with Transformer Models',
    summary: 'A neural interface that translates brain activity patterns into coherent text using specialized transformer architectures. Demonstrates 78% accuracy in controlled experiments.',
    category: 'Other',
    source: 'ArXiv',
    sourceUrl: 'https://arxiv.org/abs/example.2025.67890',
    date: '2025-03-17T09:10:00Z',
    tags: ['brain-computer-interface', 'neural-decoding', 'transformers'],
    citations: 45
  },
  {
    id: '7',
    title: 'SparseAttention: Efficient Transformers with Dynamic Sparsity Patterns',
    summary: 'A novel attention mechanism that dynamically determines sparsity patterns based on input content, reducing computational complexity while maintaining model quality.',
    category: 'NLP',
    source: 'GitHub',
    sourceUrl: 'https://github.com/example/sparseattention',
    date: '2025-03-15T11:30:00Z',
    tags: ['attention', 'transformers', 'efficiency', 'sparsity'],
    stars: 942
  },
  {
    id: '8',
    title: 'VideoLLM: Understanding and Generating Long-form Video Content',
    summary: 'A large language model adapted for video understanding that can process hours of video content and generate detailed summaries, answer questions, and create time-stamped annotations.',
    category: 'Multimodal',
    source: 'HuggingFace',
    sourceUrl: 'https://huggingface.co/models/example/videollm',
    date: '2025-03-12T16:40:00Z',
    tags: ['video', 'llm', 'multimodal', 'understanding'],
    downloads: 34521
  },
  {
    id: '9',
    title: 'Neural Architecture Search for Efficient AI Model Design',
    summary: 'An automated approach to designing neural network architectures that outperform human-designed models while requiring fewer parameters and less training time.',
    category: 'Other',
    source: 'ArXiv',
    sourceUrl: 'https://arxiv.org/abs/example.2025.24680',
    date: '2025-03-10T13:50:00Z',
    tags: ['neural-architecture-search', 'efficiency', 'automation'],
    citations: 72
  },
  {
    id: '10',
    title: 'UnifiedTranslator: A Single Model for 100+ Languages with Shared Representations',
    summary: 'A translation model that handles over 100 languages through a unified representation space, showing improvements especially for low-resource languages through cross-lingual transfer.',
    category: 'NLP',
    source: 'GitHub',
    sourceUrl: 'https://github.com/example/unifiedtranslator',
    date: '2025-03-08T07:25:00Z',
    tags: ['translation', 'multilingual', 'representation-learning'],
    stars: 2103
  },
  {
    id: '11',
    title: 'NeuroSym: Neuro-Symbolic Reasoning with Large Language Models',
    summary: 'A framework that combines neural networks with symbolic reasoning to enhance logical consistency and factual accuracy in language model outputs.',
    category: 'LLM',
    source: 'HuggingFace',
    sourceUrl: 'https://huggingface.co/papers/example/neurosym',
    date: '2025-03-05T19:15:00Z',
    tags: ['neuro-symbolic', 'reasoning', 'llm', 'logic'],
    downloads: 18934
  },
  {
    id: '12',
    title: '3D Scene Understanding from Single Images using Implicit Neural Representations',
    summary: 'A computer vision system that reconstructs detailed 3D scenes from single 2D images using implicit neural representations and physically-based rendering constraints.',
    category: 'CV',
    source: 'ArXiv',
    sourceUrl: 'https://arxiv.org/abs/example.2025.13579',
    date: '2025-03-03T12:00:00Z',
    tags: ['3d-reconstruction', 'neural-rendering', 'scene-understanding'],
    citations: 86
  }
];

// Analytics mock data
export interface CategoryCount {
  name: string;
  count: number;
}

export const categoryDistribution: CategoryCount[] = [
  { name: 'NLP', count: 35 },
  { name: 'CV', count: 28 },
  { name: 'LLM', count: 42 },
  { name: 'Multimodal', count: 24 },
  { name: 'RL', count: 15 },
  { name: 'Other', count: 18 }
];

export interface SourceDistribution {
  name: string;
  count: number;  // Changed from 'value' to 'count' to match usage
}

export const sourceDistribution: SourceDistribution[] = [
  { name: 'GitHub', count: 68 },
  { name: 'HuggingFace', count: 52 },
  { name: 'ArXiv', count: 42 }
];

export interface WeeklyTrend {
  week: string;
  count: number;
}

export const weeklyTrends: WeeklyTrend[] = [
  { week: 'Week 1', count: 18 },
  { week: 'Week 2', count: 22 },
  { week: 'Week 3', count: 26 },
  { week: 'Week 4', count: 32 },
  { week: 'Week 5', count: 28 },
  { week: 'Week 6', count: 34 },
  { week: 'Week 7', count: 42 },
  { week: 'Week 8', count: 38 }
];

export interface PopularTag {
  name: string;
  count: number;
}

export const popularTags: PopularTag[] = [
  { name: 'transformers', count: 48 },
  { name: 'efficiency', count: 36 },
  { name: 'llm', count: 42 },
  { name: 'vision', count: 28 },
  { name: 'fine-tuning', count: 32 },
  { name: 'multimodal', count: 24 },
  { name: 'reasoning', count: 18 },
  { name: 'diffusion', count: 22 }
];
