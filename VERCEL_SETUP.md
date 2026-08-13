# Publicação do ClimaGestor na Vercel

O projeto está preparado para ser importado a partir do repositório `alexpinto2-dev/climagestor-site` na Vercel.

## Configuração do projeto

Use o repositório GitHub existente e mantenha a raiz do projeto como `/`. A configuração versionada em `vercel.json` usa `pnpm install --frozen-lockfile`, executa `pnpm build` e publica `dist/public`.

## Fluxo recomendado

No painel da Vercel, crie um novo projeto a partir do GitHub, selecione `alexpinto2-dev/climagestor-site` e confirme a configuração detectada. Depois do primeiro deploy, a Vercel fornecerá um endereço temporário `*.vercel.app` para validação.

## Domínio personalizado

Quando `climagestor.com.br` for comprado, adicione-o em **Project Settings → Domains**. A Vercel informará os registros DNS exatos para o registrador escolhido. Em uma configuração comum, o domínio raiz usa um registro `A` e `www` usa um registro `CNAME`, mas os valores exibidos pela Vercel devem prevalecer.

Não é necessário comprar ou alterar DNS agora. A compra do domínio e qualquer mudança no registrador devem ser confirmadas pelo proprietário antes da execução.

## Assets estáticos

Logo, hero e screenshots estão em `client/public/assets` e são referenciados com caminhos `/assets/...`. Assim, a Vercel entrega os arquivos diretamente junto com o build, sem depender de caminhos internos do Manus.

## Captura de leads

O CTA final inclui um formulário curto com nome, WhatsApp e intenção de contato. Como a landing page continua estática, o formulário não grava dados em banco: após a validação, ele abre o WhatsApp comercial com uma mensagem pré-preenchida. Para persistência, automações ou distribuição para CRM, será necessário conectar um backend ou serviço de formulários posteriormente.

## SEO social e técnico

O head inclui Open Graph, Twitter Card, canonical, `robots.txt`, `sitemap.xml` e JSON-LD básico para o ClimaGestor como aplicação web voltada a empresas de climatização em Aracaju. A imagem de compartilhamento usa o hero servido em `/assets/climagestor-ac-hero.webp`.

### Diagnóstico da publicação

O endereço publicado originalmente referenciava `/manus-storage/...`, caminhos internos do ambiente Manus que retornavam falha na Vercel. A correção foi migrada para `/assets/...`; após o redeploy, a logo, o hero e os screenshots retornaram HTTP 200 no endereço `climagestor-site.vercel.app` e a página passou a referenciar somente os caminhos estáticos do projeto.
