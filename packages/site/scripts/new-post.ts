// deno run --no-check --allow-read --allow-write --allow-run new-post.ts
import { DateTimeFormatter } from 'https://deno.land/std@0.119.0/datetime/formatter.ts';

let template = [
    '---',
    'title: \'{{title}}\'',
    'date: \'{{date}}\'',
    '---',
    '',
    '{{content}}'
].join('\n')

template = template
    .replace(
        '{{date}}',
        new DateTimeFormatter('yyyy-MM-dd')
            .format(
                new Date(),
                {
                    timeZone: 'UTC'
                }
            )
    );

(async() => {
    const title = await prompt('Please provide post title:');
    if (!title) return console.log('I want title :(')

    template = template.replace('{{title}}', title);

    const fileName = `${title.toLowerCase().replace(/ /g, '-')}.md`
    const path = `_drafts/${fileName}`;

    const encoder = new TextEncoder();
    Deno.writeFileSync(path, encoder.encode(template));

    console.log('File has been saved to _drafts/. Write content and press enter to move.');

    await prompt('Click enter for continue')

    Deno.rename(path, `../src/blog/posts/${fileName}`);

    console.log('Nice, good job :D');
})();