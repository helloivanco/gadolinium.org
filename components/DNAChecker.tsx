'use client';

import {
  AlertCircle,
  CheckCircle2,
  FileText,
  LoaderCircle,
  Lock,
  Upload,
  XCircle,
} from 'lucide-react';
import { useRef, useState } from 'react';

interface SNPResult {
  rsId: string;
  found: boolean;
  category: string;
  description: string;
  riskAllele?: string;
  userGenotype?: string;
  lineNumber?: number;
  hasRisk?: boolean;
  isProtective?: boolean;
  riskExplanation?: string;
}

interface CategoryResults {
  category: string;
  emoji: string;
  snps: SNPResult[];
}

const SNP_DEFINITIONS: Record<
  string,
  { category: string; emoji: string; description: string; riskAllele?: string }
> = {
  // Gut Histamine (AOC1/DAO)
  rs10156191: {
    category: 'Gut Histamine (AOC1/DAO)',
    emoji: '🟢',
    description: 'Reduced enzyme activity',
    riskAllele: 'T',
  },
  rs1049793: {
    category: 'Gut Histamine (AOC1/DAO)',
    emoji: '🟢',
    description: 'Reduced enzyme activity',
    riskAllele: 'G',
  },
  rs2052129: {
    category: 'Gut Histamine (AOC1/DAO)',
    emoji: '🟢',
    description: 'Low DAO levels in blood',
    riskAllele: 'T',
  },
  rs1049742: {
    category: 'Gut Histamine (AOC1/DAO)',
    emoji: '🟢',
    description: 'Reduced enzyme activity',
    riskAllele: 'T',
  },
  rs2071514: {
    category: 'Gut Histamine (AOC1/DAO)',
    emoji: '🟢',
    description: 'Associated with slightly higher DAO (Protective)',
    riskAllele: 'A',
  },

  // Systemic Histamine (HNMT)
  rs11558538: {
    category: 'Systemic Histamine (HNMT)',
    emoji: '🔵',
    description: 'Reduced clearance',
    riskAllele: 'T',
  },
  rs1050891: {
    category: 'Systemic Histamine (HNMT)',
    emoji: '🔵',
    description: 'Reduced clearance',
    riskAllele: 'A',
  },
  rs2071048: {
    category: 'Systemic Histamine (HNMT)',
    emoji: '🔵',
    description: 'Reduced clearance (Common)',
    riskAllele: 'T',
  },
  i3000469: {
    category: 'Systemic Histamine (HNMT)',
    emoji: '🔵',
    description: 'Reduced clearance',
    riskAllele: 'T',
  },

  // Production & Receptors (HDC/HRH)
  rs2073440: {
    category: 'Production & Receptors (HDC/HRH)',
    emoji: '🟠',
    description: 'Decreased production (alters balance)',
    riskAllele: 'G',
  },
  rs901865: {
    category: 'Production & Receptors (HDC/HRH)',
    emoji: '🟠',
    description: 'Increased H1 receptors / Asthma risk',
    riskAllele: 'T',
  },
  rs2067474: {
    category: 'Production & Receptors (HDC/HRH)',
    emoji: '🟠',
    description: 'Decreased H2 receptor function',
    riskAllele: 'A',
  },
  rs11662595: {
    category: 'Production & Receptors (HDC/HRH)',
    emoji: '🟠',
    description: 'Immune regulation issues',
    riskAllele: 'G',
  },

  // Methylation (MTHFR & BHMT)
  rs1801133: {
    category: 'Methylation (MTHFR & BHMT)',
    emoji: '🟣',
    description: 'Reduced folate conversion',
    riskAllele: 'A/T',
  },
  rs1801131: {
    category: 'Methylation (MTHFR & BHMT)',
    emoji: '🟣',
    description: 'May affect BH4-related pathways',
    riskAllele: 'G/C',
  },
  rs651852: {
    category: 'Methylation (MTHFR & BHMT)',
    emoji: '🟣',
    description: 'Slow homocysteine recycling / Stress sensitive',
    riskAllele: 'T',
  },
  rs567754: {
    category: 'Methylation (MTHFR & BHMT)',
    emoji: '🟣',
    description: 'Reduced enzyme activity',
    riskAllele: 'T',
  },
  rs3733890: {
    category: 'Methylation (MTHFR & BHMT)',
    emoji: '🟣',
    description: 'Linked to choline depletion',
    riskAllele: 'A',
  },

  // Stress & Inflammation
  rs4680: {
    category: 'Stress & Inflammation',
    emoji: '🟡',
    description: 'Slow breakdown of stress hormones',
    riskAllele: 'A',
  },
  rs1800795: {
    category: 'Stress & Inflammation',
    emoji: '🟡',
    description: 'Prone to high inflammation',
    riskAllele: 'G',
  },
};

const ALL_SNP_IDS = Object.keys(SNP_DEFINITIONS);

const DNAChecker = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [results, setResults] = useState<CategoryResults[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);
  const [statusMessage, setStatusMessage] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.name.endsWith('.txt')) {
      setError('Please upload a .txt file');
      return;
    }

    // Check file size (50MB limit)
    if (file.size > 50 * 1024 * 1024) {
      setError('File size exceeds 50MB limit');
      return;
    }

    setFileName(file.name);
    setError(null);
    setResults(null);
    setIsProcessing(true);
    setProgress(0);
    setStatusMessage('Reading file...');

    try {
      await processFile(file);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : 'An error occurred while processing the file'
      );
      setIsProcessing(false);
      setStatusMessage('');
    }
  };

  const processFile = async (file: File) => {
    return new Promise<void>((resolve, reject) => {
      const reader = new FileReader();

      reader.onprogress = (e) => {
        if (e.lengthComputable) {
          const percentLoaded = Math.round((e.loaded / e.total) * 100);
          setProgress(percentLoaded);
          setStatusMessage(`Reading file... ${percentLoaded}%`);
        }
      };

      reader.onload = (e) => {
        try {
          setProgress(100);
          setStatusMessage('File loaded. Scanning for genetic variants...');
          const text = e.target?.result as string;

          // Process in chunks to avoid blocking UI for large files
          setTimeout(() => {
            setProgress(100);
            setStatusMessage('Scanning DNA data...');

            // Use requestAnimationFrame to allow UI updates during processing
            requestAnimationFrame(() => {
              const foundSNPs = scanForSNPs(text);
              setProgress(100);
              setStatusMessage('Organizing results...');

              // Organize results by category
              const categoryMap = new Map<string, SNPResult[]>();

              // Initialize all SNPs as not found
              ALL_SNP_IDS.forEach((rsId) => {
                const def = SNP_DEFINITIONS[rsId];
                if (!categoryMap.has(def.category)) {
                  categoryMap.set(def.category, []);
                }
                categoryMap.get(def.category)!.push({
                  rsId,
                  found: false,
                  category: def.category,
                  description: def.description,
                  riskAllele: def.riskAllele,
                });
              });

              setProgress(100);
              setStatusMessage('Matching variants...');

              // Mark found SNPs and analyze risk
              foundSNPs.forEach(({ rsId, genotype, lineNumber }) => {
                const def = SNP_DEFINITIONS[rsId];
                if (def) {
                  const categoryResults = categoryMap.get(def.category);
                  if (categoryResults) {
                    const snp = categoryResults.find((s) => s.rsId === rsId);
                    if (snp) {
                      snp.found = true;
                      snp.userGenotype = genotype;
                      snp.lineNumber = lineNumber;

                      // Analyze if user has risk allele
                      if (
                        def.riskAllele &&
                        genotype !== 'Not found' &&
                        genotype !== '--'
                      ) {
                        const riskAlleles = def.riskAllele.split('/'); // Handle A/T format
                        const userAlleles = genotype
                          .split('')
                          .filter((a) => a !== '-');

                        // Check if any risk allele is present
                        const hasRisk = riskAlleles.some((risk) =>
                          userAlleles.some(
                            (user) => user.toUpperCase() === risk.toUpperCase()
                          )
                        );

                        snp.hasRisk = hasRisk;

                        // Check if it's protective (for rs2071514 which is protective)
                        if (rsId === 'rs2071514' && hasRisk) {
                          snp.isProtective = true;
                          snp.riskExplanation = `You carry the protective allele (${def.riskAllele}), which is associated with slightly higher DAO activity. This may help with histamine breakdown from food.`;
                        } else if (hasRisk) {
                          snp.riskExplanation = `You carry the risk allele (${
                            def.riskAllele
                          }), which may contribute to ${def.description.toLowerCase()}.`;
                        } else {
                          snp.riskExplanation = `You do not carry the risk allele (${
                            def.riskAllele
                          }). This is favorable and may indicate better ${def.description
                            .toLowerCase()
                            .replace(
                              /reduced|decreased|slow|low/gi,
                              'functionality'
                            )}.`;
                        }
                      } else if (
                        genotype === '--' ||
                        genotype === 'Not found'
                      ) {
                        snp.riskExplanation =
                          'Genotype not available or no call made for this variant.';
                      }
                    }
                  }
                }
              });

              setProgress(100);
              setStatusMessage('Finalizing results...');

              // Convert to array format
              const categoryResults: CategoryResults[] = Array.from(
                categoryMap.entries()
              ).map(([category, snps]) => {
                const firstSnp = snps[0];
                return {
                  category,
                  emoji: firstSnp ? SNP_DEFINITIONS[firstSnp.rsId].emoji : '',
                  snps: snps.sort((a, b) => {
                    // Sort found SNPs first, then by RS ID
                    if (a.found !== b.found) return a.found ? -1 : 1;
                    return a.rsId.localeCompare(b.rsId);
                  }),
                };
              });

              setStatusMessage('Complete!');

              setTimeout(() => {
                setResults(categoryResults);
                setIsProcessing(false);
                setStatusMessage('');
                setProgress(0);
                resolve();
              }, 300);
            });
          }, 100);
        } catch (err) {
          reject(err);
        }
      };

      reader.onerror = () => {
        reject(new Error('Failed to read file'));
      };

      reader.readAsText(file);
    });
  };

  const scanForSNPs = (
    text: string
  ): Array<{ rsId: string; genotype: string; lineNumber: number }> => {
    const found: Array<{ rsId: string; genotype: string; lineNumber: number }> =
      [];
    const foundSet = new Set<string>(); // Use Set for O(1) duplicate checking
    const lines = text.split('\n');

    // Create a regex pattern for all SNP IDs (including non-RS IDs like i3000469)
    // Escape special characters and create word boundaries
    const escapedIds = ALL_SNP_IDS.map((id) =>
      id.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    );
    const snpPattern = new RegExp(`\\b(${escapedIds.join('|')})\\b`, 'gi');

    // Process in chunks to avoid blocking for very large files
    const chunkSize = 10000; // Process 10k lines at a time

    for (
      let chunkStart = 0;
      chunkStart < lines.length;
      chunkStart += chunkSize
    ) {
      const chunkEnd = Math.min(chunkStart + chunkSize, lines.length);

      for (let index = chunkStart; index < chunkEnd; index++) {
        const line = lines[index];
        if (!line || line.trim().startsWith('#')) continue; // Skip empty lines and comments

        // Look for SNP IDs in the line - match at the start of the line or after whitespace
        const matches = line.matchAll(snpPattern);

        for (const match of matches) {
          const snpId = match[1].toLowerCase();
          const matchIndex = match.index!;

          // Verify this is a valid match (not part of a larger word)
          if (ALL_SNP_IDS.includes(snpId) && !foundSet.has(snpId)) {
            // Check if the match is at the start of the line or preceded by whitespace/tab
            const beforeMatch = line.substring(0, matchIndex);
            const isAtStart = matchIndex === 0;
            const isAfterWhitespace = /[\s\t]/.test(beforeMatch.slice(-1));

            if (isAtStart || isAfterWhitespace) {
              foundSet.add(snpId);

              // Extract genotype - handle multiple file formats
              let genotype = 'Not found';

              // Split line by tabs (most common format)
              const tabParts = line.split('\t').map((part) => part.trim());
              if (tabParts.length > 1) {
                // Find which column contains the RS ID
                const rsIndex = tabParts.findIndex(
                  (part) => part.toLowerCase() === snpId
                );

                if (rsIndex !== -1) {
                  // 23andMe format: rsid, chromosome, position, genotype (genotype is last column)
                  // AncestryDNA format: rsid, chromosome, position, genotype (genotype is last column)
                  // Most common: genotype is in the last column
                  if (
                    tabParts[tabParts.length - 1] &&
                    /^[ATCGDI-]{1,3}$/i.test(tabParts[tabParts.length - 1])
                  ) {
                    genotype = tabParts[tabParts.length - 1].toUpperCase();
                  }
                  // Try next column after RS ID (some formats have genotype immediately after)
                  else if (
                    tabParts[rsIndex + 1] &&
                    /^[ATCGDI-]{1,3}$/i.test(tabParts[rsIndex + 1])
                  ) {
                    genotype = tabParts[rsIndex + 1].toUpperCase();
                  }
                  // Try any column that looks like a genotype (fallback)
                  else {
                    for (let i = 0; i < tabParts.length; i++) {
                      if (
                        i !== rsIndex &&
                        /^[ATCGDI-]{1,3}$/i.test(tabParts[i])
                      ) {
                        genotype = tabParts[i].toUpperCase();
                        break;
                      }
                    }
                  }
                }
              }

              // If tab-separated didn't work, try space or comma separated
              if (genotype === 'Not found') {
                const escapedId = snpId.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
                // Match genotype after the SNP ID (one or more spaces/tabs/commas, then genotype)
                const genotypeMatch = line.match(
                  new RegExp(
                    `${escapedId}[\\s,\\t]+([ATCGDI-]{1,3})(?:[\\s,\\t]|$)`,
                    'i'
                  )
                );
                if (genotypeMatch) {
                  genotype = genotypeMatch[1].trim().toUpperCase();
                }
              }

              found.push({
                rsId: snpId,
                genotype,
                lineNumber: index + 1,
              });
            }
          }
        }
      }
    }

    return found;
  };

  const handleReset = () => {
    setResults(null);
    setError(null);
    setFileName(null);
    setProgress(0);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const totalFound =
    results?.reduce(
      (sum, cat) => sum + cat.snps.filter((s) => s.found).length,
      0
    ) || 0;
  const totalSNPs = ALL_SNP_IDS.length;
  const totalAtRisk =
    results?.reduce(
      (sum, cat) =>
        sum +
        cat.snps.filter((s) => s.found && s.hasRisk === true && !s.isProtective)
          .length,
      0
    ) || 0;

  return (
    <section className='bg-white rounded-3xl shadow-[0_2px_8px_rgba(0,0,0,0.06)] border border-gray-200/60 p-8 md:p-12 hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] hover:border-gray-300/80 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]'>
      <div className='flex items-center gap-3 mb-6'>
        <span className='text-3xl'>📊</span>
        <h2 className='text-2xl md:text-3xl font-semibold text-gray-900 tracking-tight'>
          Check Your DNA Raw Data File
        </h2>
      </div>

      <div className='space-y-6'>
        <div className='bg-gray-50/80 rounded-2xl p-6 border border-gray-200/60'>
          <p className='text-gray-700 mb-4'>
            Upload your DNA raw data file below to automatically scan for
            histamine and MCAS-related genetic variants. The tool will check for
            18 key SNPs across 5 categories and show you which variants you
            carry, along with your specific genotypes.
          </p>
          <div className='bg-blue-50/80 rounded-xl p-4 border border-blue-200/60 mb-4'>
            <div className='flex items-start gap-3'>
              <Lock className='w-5 h-5 text-blue-600 mt-0.5 shrink-0' />
              <div className='text-sm text-gray-700'>
                <p className='font-semibold text-blue-900 mb-1'>
                  Local Processing
                </p>
                <p className='text-gray-700'>
                  All processing happens on your device. Your DNA data never
                  leaves your computer.
                </p>
              </div>
            </div>
          </div>
          <div className='flex items-start gap-3'>
            <AlertCircle className='w-5 h-5 text-blue-600 mt-0.5 shrink-0' />
            <div className='text-sm text-gray-700'>
              <p className='font-semibold text-gray-900 mb-2'>
                Additional Information:
              </p>
              <ul className='space-y-1 list-disc list-inside'>
                <li>All processing happens locally in your browser</li>
                <li>Your DNA data never leaves your device</li>
                <li>No data is uploaded to any server</li>
                <li>Supports files up to 50MB</li>
              </ul>
            </div>
          </div>
        </div>

        {!results && !isProcessing && (
          <div className='border-2 border-dashed border-gray-300 rounded-2xl p-8 text-center hover:border-blue-400 transition-colors duration-300'>
            <input
              ref={fileInputRef}
              type='file'
              accept='.txt'
              onChange={handleFileSelect}
              className='hidden'
              id='dna-file-input'
              aria-label='Upload DNA raw data file'
            />
            <label
              htmlFor='dna-file-input'
              className='cursor-pointer flex flex-col items-center gap-4'>
              <div className='w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center'>
                <Upload className='w-8 h-8 text-blue-600' aria-hidden='true' />
              </div>
              <div>
                <p className='text-lg font-semibold text-gray-900 mb-1'>
                  Upload Your DNA Raw Data File
                </p>
                <p className='text-sm text-gray-600'>
                  Click to select a .txt file from 23andMe, AncestryDNA, or
                  other providers
                </p>
              </div>
            </label>
          </div>
        )}

        {isProcessing && (
          <div className='border-2 border-blue-300 rounded-2xl p-8 md:p-10 text-center bg-gradient-to-br from-blue-50/80 to-indigo-50/80 shadow-lg'>
            <div className='flex flex-col items-center'>
              <LoaderCircle className='w-16 h-16 text-blue-600 animate-spin mb-6' />
              <p className='text-xl font-semibold text-gray-900 mb-2'>
                Processing {fileName}
              </p>
              {statusMessage && (
                <p className='text-base text-gray-700 mb-6 font-medium'>
                  {statusMessage}
                </p>
              )}
              <div className='w-full max-w-md bg-gray-200 rounded-full h-3 mt-2 mb-3 shadow-inner'>
                <div
                  className='bg-gradient-to-r from-blue-600 to-indigo-600 h-3 rounded-full transition-all duration-300 ease-out shadow-sm'
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className='flex items-center gap-2 text-sm text-gray-600'>
                <span className='font-semibold'>{progress}%</span>
                <span>complete</span>
              </div>
              <p className='text-xs text-gray-500 mt-4 max-w-md'>
                Large files may take a moment to process. Please keep this page
                open. All processing happens locally on your device—your data
                never leaves your computer.
              </p>
            </div>
          </div>
        )}

        {error && (
          <div className='bg-red-50/80 rounded-2xl p-6 border border-red-200/60'>
            <div className='flex items-start gap-3'>
              <XCircle className='w-5 h-5 text-red-600 mt-0.5 flex-shrink-0' />
              <div>
                <p className='font-semibold text-red-900 mb-1'>Error</p>
                <p className='text-sm text-red-700'>{error}</p>
              </div>
            </div>
          </div>
        )}

        {results && (
          <div className='space-y-6'>
            <div className='flex items-center justify-between flex-wrap gap-4'>
              <div>
                <p className='text-lg font-semibold text-gray-900'>
                  Results Summary
                </p>
                <p className='text-sm text-gray-600'>
                  Found {totalFound} of {totalSNPs} relevant SNPs
                  {totalAtRisk > 0 && (
                    <span className='text-red-400 font-medium ml-1'>
                      • {totalAtRisk} at Risk
                    </span>
                  )}
                </p>
              </div>
              <button
                onClick={handleReset}
                className='px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors duration-300'>
                Upload Another File
              </button>
            </div>

            {results.map((categoryResult) => {
              const foundCount = categoryResult.snps.filter(
                (s) => s.found
              ).length;
              if (foundCount === 0) return null;

              return (
                <div
                  key={categoryResult.category}
                  className='bg-gray-50/80 rounded-2xl p-6 border border-gray-200/60'>
                  <div className='flex items-center gap-2 mb-4'>
                    <span className='text-2xl'>{categoryResult.emoji}</span>
                    <h3 className='text-xl font-semibold text-gray-900'>
                      {categoryResult.category}
                    </h3>
                    <span className='text-sm text-gray-600'>
                      ({foundCount} found)
                    </span>
                  </div>
                  <div className='space-y-3'>
                    {categoryResult.snps
                      .filter((s) => s.found)
                      .map((snp) => {
                        const isGood =
                          snp.isProtective || snp.hasRisk === false;
                        const isBad = snp.hasRisk === true && !snp.isProtective;

                        return (
                          <div
                            key={snp.rsId}
                            className={`rounded-xl p-5 border-2 ${
                              isBad
                                ? 'bg-red-50/80 border-red-200/80'
                                : isGood
                                  ? 'bg-green-50/80 border-green-300/80'
                                  : 'bg-white border-gray-200/80'
                            }`}>
                            <div className='flex items-start gap-3'>
                              {isBad ? (
                                <XCircle className='w-6 h-6 text-red-400 shrink-0 mt-0.5' />
                              ) : isGood ? (
                                <CheckCircle2 className='w-6 h-6 text-green-600 shrink-0 mt-0.5' />
                              ) : (
                                <CheckCircle2 className='w-6 h-6 text-gray-400 shrink-0 mt-0.5' />
                              )}
                              <div className='flex-1 min-w-0'>
                                <div className='flex items-center gap-2 mb-2'>
                                  <p className='font-semibold text-gray-900 text-lg'>
                                    {snp.rsId}
                                  </p>
                                  {snp.userGenotype && (
                                    <span className='px-2 py-0.5 bg-gray-100 rounded text-xs font-mono text-gray-700'>
                                      {snp.userGenotype}
                                    </span>
                                  )}
                                </div>
                                <p className='text-sm text-gray-700 mb-3'>
                                  {snp.description}
                                </p>
                                {snp.riskExplanation && (
                                  <div
                                    className={`rounded-lg p-3 mb-3 ${
                                      isBad
                                        ? 'bg-red-100/60 border border-red-200/60'
                                        : isGood
                                        ? 'bg-green-100/60 border border-green-200/60'
                                        : 'bg-gray-100/60 border border-gray-200/60'
                                    }`}>
                                    <p
                                      className={`text-sm font-medium ${
                                        isBad
                                          ? 'text-red-900'
                                          : isGood
                                          ? 'text-green-900'
                                          : 'text-gray-700'
                                      }`}>
                                      {snp.riskExplanation}
                                    </p>
                                  </div>
                                )}
                                <div className='flex flex-wrap gap-4 text-xs text-gray-600'>
                                  {snp.riskAllele && (
                                    <span>
                                      <strong>Risk allele:</strong>{' '}
                                      {snp.riskAllele}
                                    </span>
                                  )}
                                  {snp.lineNumber && (
                                    <span>
                                      <strong>Line:</strong> {snp.lineNumber}
                                    </span>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                  </div>
                </div>
              );
            })}

            {totalFound === 0 && (
              <div className='bg-yellow-50/80 rounded-2xl p-6 border border-yellow-200/60 text-center'>
                <FileText className='w-12 h-12 text-yellow-600 mx-auto mb-3' />
                <p className='font-semibold text-gray-900 mb-1'>
                  No Relevant SNPs Found
                </p>
                <p className='text-sm text-gray-700'>
                  The file was processed, but none of the histamine/MCAS-related
                  SNPs were found. Make sure you uploaded the correct raw data
                  file.
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default DNAChecker;
