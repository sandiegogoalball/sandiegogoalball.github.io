import os
import re

def standardize_pages():
    # Read index.html as the source of truth
    with open('index.html', 'r', encoding='utf-8') as f:
        index_content = f.read()

    # Extract sections
    header_match = re.search(r'<header.*?</header>', index_content, re.DOTALL)
    footer_match = re.search(r'<footer.*?</footer>', index_content, re.DOTALL)
    contrast_modal_match = re.search(r'<dialog id="contrast-modal">.*?</dialog>', index_content, re.DOTALL)
    confirmation_modal_match = re.search(r'<dialog id="confirmation-modal">.*?</dialog>', index_content, re.DOTALL)

    if not (header_match and footer_match and contrast_modal_match and confirmation_modal_match):
        print("Error: Could not find all sections in index.html")
        return

    header_html = header_match.group(0)
    footer_html = footer_match.group(0)
    contrast_modal_html = contrast_modal_match.group(0)
    confirmation_modal_html = confirmation_modal_match.group(0)

    # Prepare header without student banner for other pages
    header_no_banner = re.sub(r'<!-- Student Project Banner -->.*?</div>', '', header_html, flags=re.DOTALL)

    # List of all HTML files
    html_files = [f for f in os.listdir('.') if f.endswith('.html') and f != 'index.html']

    for filename in html_files:
        print(f"Standardizing {filename}...")
        with open(filename, 'r', encoding='utf-8') as f:
            content = f.read()

        # Update Header
        content = re.sub(r'<header.*?</header>', header_no_banner, content, flags=re.DOTALL)

        # Update Footer
        content = re.sub(r'<footer.*?</footer>', footer_html, content, flags=re.DOTALL)

        # Update Modals
        # First remove any existing ones
        content = re.sub(r'<dialog id="contrast-modal">.*?</dialog>', '', content, flags=re.DOTALL)
        content = re.sub(r'<dialog id="confirmation-modal">.*?</dialog>', '', content, flags=re.DOTALL)

        # Insert them before </body>
        modals_combined = f"\n    {contrast_modal_html}\n    {confirmation_modal_html}\n"
        content = content.replace('</body>', modals_combined + '</body>')

        # Clean up double modals or misplaced ones if any
        # (The above might have added them multiple times if they weren't matched before)
        # Actually, let's be more robust.

        # Ensure correct JS and CSS paths
        content = re.sub(r'<link rel="stylesheet" href=".*?style.css">', '<link rel="stylesheet" href="css/style.css">', content)
        content = re.sub(r'<script src=".*?main.js"></script>', '<script src="js/main.js"></script>', content)

        # Remove extra whitespaces/newlines at the end of file
        content = content.strip() + '\n'

        with open(filename, 'w', encoding='utf-8') as f:
            f.write(content)

standardize_pages()
